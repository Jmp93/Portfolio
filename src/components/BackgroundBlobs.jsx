export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top Left Blob - Pushed higher and further left */}
      <div className="absolute -top-[5%] left-[5%] w-120 h-120 bg-cyan-500/30 rounded-full blur-[180px]" />

      {/* Bottom Right Blob - Pushed lower and further right */}
      <div className="absolute -bottom-[5%] -right-[5%] w-150 h-150 bg-purple-500/30 rounded-full blur-[200px]" />
    </div>
  );
}
