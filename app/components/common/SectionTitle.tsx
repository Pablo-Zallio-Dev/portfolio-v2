
export default function SectionTitle( {text, center}: {text:string, center?: boolean} ){
      return <h2 className={` pt-4 font-spaceGrotesk font-semibold  tracking-tight text-3xl sm:text-4xl ${center ?'text-center': ''} `}> {text} </h2>
}