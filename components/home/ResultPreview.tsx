interface Props {
    image: string;
  }
  
  export default function ResultPreview({ image }: Props) {
    return (
      <section className="px-6 mt-8">
        <div className="bg-white rounded-[32px] p-4 shadow-sm">
  
          <div className="mb-4">
            <p className="text-sm tracking-[0.25em] text-neutral-400 mb-2">
              RESULTADO
            </p>
  
            <h2 className="text-2xl font-semibold">
              Generación IA
            </h2>
          </div>
  
          <img
            src={image}
            alt=""
            className="w-full rounded-[24px]"
          />
  
        </div>
      </section>
    );
  }