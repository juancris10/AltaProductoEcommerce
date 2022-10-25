import fsContexto from "./Contexto";
import { addDoc, collection, doc, query, onSnapshot, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { fs } from "../Services/Firebase";
import { useState, useEffect } from "react";
import "bootswatch/dist/quartz/bootstrap.min.css"
export default function FirestoreContext(props) {

    const { children } = props;
    const [Producto, setProducto] = useState([]);
    

    const registro = (NombreProduc, Cantidad, FotoProduct, Precio, Value) => {
        addDoc(collection(fs, "Productos", `${Value}`), {
            NombreProduc: NombreProduc,
            Cantidad: Cantidad,
            FotoProduct: FotoProduct,
            Precio: Precio,

        })
    }






    const modificar = (identificador, NombreProduc, Cantidad, FotoProduct, Precio, Value) => {
        updateDoc(doc(fs, "Productos", `${Value}`,  identificador), {
            NombreProduc: NombreProduc,
            Cantidad: Cantidad,
            FotoProduct: FotoProduct,
            Precio: Precio,

        });
    }

    const eliminar = (identificador,Value) => {
        deleteDoc(doc(fs, "Productos", `${Value}`,  identificador))
    }


    useEffect(() => {
        const colRef = collection(db, "Productos");
        const docsSnap = await getDocs(colRef);
        docsSnap.forEach(doc => {
            console.log(doc.data());
        })

    }, []);



    return (
        <>
            <fsContexto.Provider value={{
                registro,
                Producto,
                modificar,
                eliminar
            }}>
                {children}
            </fsContexto.Provider>




        </>
    )

}