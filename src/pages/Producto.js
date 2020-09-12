import React from 'react'


const Producto = ({producto}) => {
    return(
        <div className="col-md-4 mb-3 mt-3">
            <div className="card">
                <h2 className="card-header">{producto.name}</h2>

                <img className="card-img-top"  />
                
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                    >
                        Ver Cerveza
                    </button>
                </div>

            </div>
        </div>
    )

}

export default Producto