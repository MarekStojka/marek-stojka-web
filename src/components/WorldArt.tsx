export interface TileArtwork {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
}

export default function WorldArt({ artwork }: { artwork?: TileArtwork }) {
  if (!artwork) return null;
  return <div className="world-art pile-art"><img className="pile-photo" src={artwork.src} srcSet={artwork.srcSet} sizes="(max-width: 700px) 45vw, (max-width: 1100px) 40vw, 420px" width={artwork.width} height={artwork.height} alt={artwork.alt} decoding="async" /></div>;
}
