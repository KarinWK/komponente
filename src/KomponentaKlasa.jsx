import { Component } from "react";
import KomponentaFunkcija from "./KomponentaFunkcija";

export default class KomponentaKlasa extends Component {
    render() {
        return (
            <>
                <h1>Komponenta umetnuta u komponentu</h1>
                <KomponentaFunkcija />
                <h1>Druga komponenta</h1>
                <p>Ovo je komponenta definirana klasom.</p>
            </>
        );
    }
}
