import { Button } from './Button'

export function Hero() {
  return (
    <section className="Hero flex flex-col items-start gap-md px-xl py-xl bg-surface-subtle">
      <h1 className="Hero-Heading text-xl font-bold text-text-primary">
        Move Your Limits
      </h1>
      <p className="Hero-Subcopy text-md text-text-secondary max-w-md">
        新しいスニーカーコレクションで、次の一歩を踏み出そう。
      </p>
      <div className="Hero-Cta flex">
        <Button variant="primary" size="lg">
          Shop Now
        </Button>
      </div>
    </section>
  )
}
