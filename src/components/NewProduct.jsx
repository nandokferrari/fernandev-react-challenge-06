import React from "react";
import "./style.css"

export default function NewProduct({isVisible, onClose}){
    
    return isVisible && <div className="modal">
        <div className="new-product-card">
            <div className="new-product-header">
                <h1>Novo Produto</h1>
                <div className="close-icon" onClick={onClose}>X</div>
            </div>
            <form className="new-product-form">
                <div className="new-product-field-form">
                    <label>Nome:</label>
                    <input />
                </div>
                <div className="new-product-field-form">
                    <label>Categoria:</label>
                    <input />
                </div>
                <div className="new-product-field-form">
                    <label>Preço:</label>
                    <input type="number" />
                </div>
                <button 
                    type="submit" 
                    className="new-product-form-submit"
                    >
                        adicionar
                </button>
            </form>
        </div>
    </div>
}