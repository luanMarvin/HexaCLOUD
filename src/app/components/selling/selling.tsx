import SellingCard from "../cards/sellingCard";

export default function Selling() {
    return (
    <div>
        <h1>Escolha seu plano</h1>
        <p>Vamos escolher o plano ideal para você e explorá-lo com alegria e leveza.</p>
        <SellingCard planName="Plano Gratuito"></SellingCard>
        <SellingCard planName="Plano Padrão"></SellingCard>
        <SellingCard planName="Plano Premium"></SellingCard>
    </div>
    );
}
