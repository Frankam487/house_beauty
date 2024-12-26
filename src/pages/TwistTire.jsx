import CoiffureDetail from '../components/CoiffureDetail';

const TwistClassique = () => {
  return (
    <CoiffureDetail
      image="../../public/pic3.jpg"
      title="Twists Pré-étiré" // Titre
      description="Les Twists  sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
      features={[
        'Idéales pour un entretien facile',
        'Style moderne et élégant',
        'Adaptées à tous types de cheveux',
        "Durabilité de plusieurs semaines avec peu d'entretien",
      ]}
      route="/reserver"
    />
  );
};

export default TwistClassique;
