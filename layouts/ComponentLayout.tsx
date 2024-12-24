const ComponentLayout = ({children}:{children:React.ReactNode}) =>{
    return (
        <div className="w-full font-semibold">
            <div className="max-w-screen-xl mx-auto w-full bg-blue-500">
                {children}
            </div>
        </div>
    )
}

export default ComponentLayout;