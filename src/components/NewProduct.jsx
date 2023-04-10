import React, { useState } from "react";
import "./style.css"

export default function NewProduct({isVisible, onClose, addNewProduct}){
    const [form, setForm]= useState({
        nome: '',
        categoria: '',
        preco: 0
    })

    function onChangeForm(e){
        let {name, value} = e.target

        if(!name){
            return 
        }

        if (name === "preco"){
            value = Number(value)
        }

        if(name === "preco" && value === 0){
            return
        }

        setForm({...form, [name]: value})
    
    }

    function onSubmit(e){
        e.preventDefault()
        const {nome, categoria, preco} = form

        if(!nome || !categoria || !preco){
            return 
        }

         addNewProduct({...form, qtd: 0, id: new Date().getMilliseconds()})
         onClose()
    }

    return isVisible && <div className="modal">
        <div className="new-product-card">
            <div className="new-product-header">
                <h1>Novo Produto</h1>
                <div className="close-icon" onClick={onClose}>X</div>
            </div>
            <form onSubmit={onSubmit} className="new-product-form">
                <div className="new-product-field-form">
                    <label>Nome:</label>
                    <input name="nome" value={form?.nome} onChange={onChangeForm} />
                </div>
                <div className="new-product-field-form">
                    <label>Categoria:</label>
                    <input  name="categoria" value={form?.categoria} onChange={onChangeForm}/>
                </div>
                <div className="new-product-field-form">
                    <label>Preço:</label>
                    <input name="preco" value={form?.preco} onChange={onChangeForm} type="number" />
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