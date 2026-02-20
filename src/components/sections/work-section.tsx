import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Каталог
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Основная продукция</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {[
            {
              icon: "CircleDot",
              title: "Клапаны запорные",
              models: "588, 589, 998, 999, 1с",
              desc: "Для полного перекрытия потока рабочей среды на трубопроводах ТЭС и АЭС",
              direction: "left",
            },
            {
              icon: "ShieldAlert",
              title: "Клапаны предохранительные",
              models: "988, Т-131МС, Т-132МС",
              desc: "Защита оборудования от превышения давления рабочей среды",
              direction: "top",
            },
            {
              icon: "SlidersHorizontal",
              title: "Клапаны регулирующие",
              models: "1052, 1053, 1054, 1055",
              desc: "Регулирование расхода и давления пара и воды",
              direction: "right",
            },
            {
              icon: "Layers",
              title: "Задвижки",
              models: "882, 883, 1010, 1011, 1012",
              desc: "Запорная арматура для магистральных и технологических трубопроводов",
              direction: "left",
            },
            {
              icon: "Thermometer",
              title: "РОУ / БРОУ",
              models: "РОУ, БРОУ, ОУ",
              desc: "Редукционно-охладительные установки для снижения давления и температуры пара",
              direction: "bottom",
            },
            {
              icon: "Disc",
              title: "Дисковые клапаны LRV",
              models: "LRV серия",
              desc: "Современные дисковые клапаны для точного регулирования потока",
              direction: "right",
            },
          ].map((product, i) => (
            <ProductCard key={i} product={product} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  index,
  isVisible,
}: {
  product: { icon: string; title: string; models: string; desc: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (product.direction) {
        case "left":
          return "-translate-x-12 opacity-0"
        case "right":
          return "translate-x-12 opacity-0"
        case "top":
          return "-translate-y-12 opacity-0"
        case "bottom":
          return "translate-y-12 opacity-0"
        default:
          return "translate-y-8 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group rounded-xl border border-foreground/10 bg-foreground/5 p-5 backdrop-blur-sm transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/10 md:p-6 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15">
          <Icon name={product.icon} size={18} className="text-accent" />
        </div>
        <span className="font-mono text-xs text-foreground/40">0{index + 1}</span>
      </div>
      <h3 className="mb-1 font-sans text-lg font-medium text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
        {product.title}
      </h3>
      <p className="mb-2 font-mono text-xs text-accent/80">{product.models}</p>
      <p className="text-sm leading-relaxed text-foreground/60">{product.desc}</p>
    </div>
  )
}
