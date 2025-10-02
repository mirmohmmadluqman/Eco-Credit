export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What is EcoCredit?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We are on a mission to revolutionize the carbon credit industry through decentralization, making climate action more transparent, efficient, and accessible for everyone.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold tracking-tight">The Problem</h3>
                <p className="text-muted-foreground">
                    The traditional carbon market is often opaque, inefficient, and inaccessible to smaller players. High transaction costs, lack of transparency, and the risk of double-counting credits hinder its potential to effectively combat climate change.
                </p>
            </div>
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold tracking-tight">Our Vision & Mission</h3>
                <p className="text-muted-foreground">
                    Our vision is a world where anyone can contribute to and benefit from climate solutions. Our mission is to build a decentralized, trustless platform that tokenizes carbon credits, enabling a global, liquid, and transparent marketplace that empowers individuals and organizations to make a real environmental impact.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
