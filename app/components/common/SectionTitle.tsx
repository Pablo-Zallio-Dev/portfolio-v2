
export default function SectionTitle( {text, center}: {text:string, center?: boolean} ){
      return <h2 className={` font-spaceGrotesk font-semibold  tracking-tight text-3xl sm:text-4xl ${center ?'text-center': ''} `}> {text} </h2>
}