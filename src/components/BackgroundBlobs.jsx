export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top Left Blob  */}
      <div className="absolute -top-[5%] left-[5%] w-120 h-120 bg-cyan-500/30 rounded-full blur-[180px]" />

      {/* Bottom Right Blob */}
      <div className="absolute -bottom-[5%] -right-[5%] w-150 h-150 bg-purple-500/30 rounded-full blur-[200px]" />
    </div>
  );
}
