import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, Play, Pause, Music, Settings } from "lucide-react";

export function BackgroundMusic() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(0.4); // Default gentle volume 40%
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const [showControls, setShowControls] = React.useState(false);

  // Initialize and load the audio
  React.useEffect(() => {
    // Read previous settings from localStorage if available
    const savedPlayStatus = localStorage.getItem("core_bg_music_playing");
    const savedMuteStatus = localStorage.getItem("core_bg_music_muted");
    const savedVolume = localStorage.getItem("core_bg_music_volume");

    if (savedVolume) {
      const parsedVol = parseFloat(savedVolume);
      setVolume(parsedVol);
      if (audioRef.current) audioRef.current.volume = parsedVol;
    }

    if (savedMuteStatus === "true") {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.muted = true;
    }

    // Try starting audio immediately on load
    const attemptAutoplay = () => {
      const audio = audioRef.current;
      if (audio && savedPlayStatus !== "false") {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            localStorage.setItem("core_bg_music_playing", "true");
          })
          .catch((err) => {
            console.warn("Autoplay was prevented by browser security. Autoplay will activate on first click.", err);
          });
      }
    };

    // Run autoplay check immediately
    attemptAutoplay();

    // Listen to the system load completion event
    const handleSiteLoaded = () => {
      attemptAutoplay();
    };
    window.addEventListener("core_site_fully_loaded", handleSiteLoaded);

    // Trigger on any global interaction as fallback
    const initiateAutoplay = () => {
      if (hasInteracted) return;
      setHasInteracted(true);

      const audio = audioRef.current;
      if (audio) {
        if (savedPlayStatus === "false") {
          return;
        }

        audio.play()
          .then(() => {
            setIsPlaying(true);
            localStorage.setItem("core_bg_music_playing", "true");
          })
          .catch((err) => {
            console.warn("Autoplay was prevented by browser security.", err);
          });
      }

      removeInteractionListeners();
    };

    const addInteractionListeners = () => {
      window.addEventListener("click", initiateAutoplay);
      window.addEventListener("keydown", initiateAutoplay);
      window.addEventListener("touchstart", initiateAutoplay);
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("click", initiateAutoplay);
      window.removeEventListener("keydown", initiateAutoplay);
      window.removeEventListener("touchstart", initiateAutoplay);
    };

    addInteractionListeners();

    return () => {
      removeInteractionListeners();
      window.removeEventListener("core_site_fully_loaded", handleSiteLoaded);
    };
  }, [hasInteracted]);

  // Adjust volume settings dynamically
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    localStorage.setItem("core_bg_music_volume", newVol.toString());
    
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
        localStorage.setItem("core_bg_music_muted", "false");
      }
    }
  };

  // Toggle play/pause state
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem("core_bg_music_playing", "false");
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem("core_bg_music_playing", "true");
        })
        .catch((err) => console.error("Error playing audio:", err));
    }
  };

  // Toggle direct mute state
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audio.muted = newMuted;
    localStorage.setItem("core_bg_music_muted", newMuted.toString());
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Hidden native HTML5 audio stream player with auto loop */}
      <audio
        ref={audioRef}
        src="/backsound.mp3"
        loop
        preload="auto"
        style={{ display: "none" }}
      />

      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-core-bg/95 backdrop-blur-md border border-core-border/90 p-4 rounded-xl shadow-xl w-60 flex flex-col gap-3"
          >
            {/* Header / Track description block */}
            <div className="flex items-center justify-between border-b border-core-border/50 pb-2">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-core-warm animate-bounce" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-core-secondary">
                  CORE Ambience Radio
                </span>
              </div>
              <span className="text-[8px] font-mono text-emerald-500 bg-emerald-950/40 border border-emerald-900/50 px-1.5 py-0.5 rounded-sm animate-pulse">
                {isPlaying ? "PLAYING" : "PAUSED"}
              </span>
            </div>

            {/* Song / Track Title */}
            <div>
              <p className="font-display font-bold text-xs text-core-primary truncate">
                Adventure & Exploration
              </p>
              <p className="font-mono text-[8px] text-core-secondary tracking-widest uppercase">
                Official Soundtrack
              </p>
            </div>

            {/* Volume controller row slider */}
            <div className="flex items-center gap-3 bg-core-dark/50 border border-core-border/40 p-2 rounded-md">
              <button
                onClick={toggleMute}
                className="text-core-secondary hover:text-core-warm transition-colors duration-200 cursor-pointer focus:outline-hidden"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-red-500" />
                ) : (
                  <Volume2 className="w-4 h-4 text-core-warm" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-core-warm focus:outline-hidden"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Trigger / Animated Equalizer Ball Button */}
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center"
        >
          {/* Main playing / status button */}
          <button
            onClick={() => {
              togglePlay();
              // Make sure to register the initial audio interaction as handled
              if (!hasInteracted) {
                setHasInteracted(true);
              }
            }}
            className="w-12 h-12 rounded-full bg-core-dark border border-core-border hover:border-core-warm/60 flex items-center justify-center text-core-primary hover:text-core-warm cursor-pointer transition-colors shadow-lg shadow-black/80 z-10 focus:outline-none"
            title={isPlaying ? "Click to Pause Ambience" : "Click to Play Ambience"}
          >
            {isPlaying ? (
              // Spectacular dynamic visualizer waves
              <div className="flex items-center justify-center gap-0.5 h-6 w-6">
                <span className="w-0.5 h-3 bg-core-warm rounded-full animate-[bounce_0.8s_infinite]" style={{ animationDelay: "0.1s" }} />
                <span className="w-0.5 h-4.5 bg-core-warm rounded-full animate-[bounce_0.8s_infinite]" style={{ animationDelay: "0.3s" }} />
                <span className="w-0.5 h-2.5 bg-core-warm rounded-full animate-[bounce_0.8s_infinite]" style={{ animationDelay: "0.5s" }} />
                <span className="w-0.5 h-4 bg-core-warm rounded-full animate-[bounce_0.8s_infinite]" style={{ animationDelay: "0.2s" }} />
              </div>
            ) : (
              <Play className="w-5 h-5 translate-x-[1px]" />
            )}
          </button>

          {/* Settings mini gear overlay to toggle volume drawer panel */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowControls(!showControls);
            }}
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-core-border text-core-primary hover:text-core-warm border border-stone-800 flex items-center justify-center cursor-pointer shadow-md z-20 focus:outline-hidden"
            title="Audio Settings"
          >
            <Settings className="w-3.5 h-3.5 animate-[spin_5s_linear_infinite]" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
