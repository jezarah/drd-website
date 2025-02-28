const Section = ({children, minHeight, cols}) => {
    return (
         <div className={"odd:bg-white even:bg-secondary-bg grid w-full py-16 " + minHeight}>
             <div className="content">
                 <div className={"grid h-full place-content-center " + cols}>
                     {children}
                 </div>
             </div>
        </div>
    )
}
export default Section