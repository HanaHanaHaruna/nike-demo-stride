import { Button } from './Button'

export function Hero() {
  return (
    <section className="Hero flex flex-col items-start gap-4 px-10 py-10 bg-surface-product">
      <h1 className="Hero-Heading font-display text-4xl font-bold text-text-default">
        Move Your Limits
      </h1>
      <p className="Hero-Subcopy font-jp text-md text-text-secondary max-w-md">
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
