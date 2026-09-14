function Toast({ mensagem }) {
    return (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg">
            <p> {mensagem}</p>
        </div>
    )
}

export default Toast

