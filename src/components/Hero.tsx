import { Button } from './Button'

export function Hero() {
  return (
    <section className="Hero relative flex min-h-[262px] flex-col items-start justify-center gap-4 overflow-hidden bg-surface-product px-10 py-10">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute left-[-0.02%] top-[-258.5%] h-[381.82%] w-full max-w-none"
        />
      </div>
      <h1 className="Hero-Heading relative font-display text-4xl uppercase tracking-tight text-white">
        Move Your Limits
      </h1>
      <p className="Hero-Subcopy relative font-jp text-md leading-jp-body text-white max-w-md">
        新しいスニーカーコレクションで、次の一歩を踏み出そう。
      </p>
      <div className="Hero-Cta relative flex">
        <Button variant="primary" size="large">
          Shop Now
        </Button>
      </div>
    </section>
  )
}
