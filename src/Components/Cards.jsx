function Cards ({ texto, children, quantidade, cor }) {
    return (
       <div>
            <div className={`bg-{}${cor}`}>
                {children}
            </div>

            <div>
                <p></p>
                <span></span>
            </div>
       </div>
    )
}

export default Cards