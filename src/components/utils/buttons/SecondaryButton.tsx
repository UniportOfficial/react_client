export default function SecondaryButton({text, clickHandler}: {text:string, clickHandler?: Function}){
    return (
        <button className="py-4 px-8 bg-secondary rounded-xl font-semibold">{text}</button>
    )
}