export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top Left Blob  */}
      <div className="absolute -top-15 -left-[5%] w-150 h-150 bg-cyan-500/20 rounded-full blur-[120px]" />

      {/* Bottom Right Blob */}
      <div className="absolute -bottom-15 -right-[5%] w-150 h-150 bg-purple-500/20 rounded-full blur-[120px]" />
    </div>
  );
}
