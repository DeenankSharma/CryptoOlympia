
import { TechnologyUsed } from "./TechnoUsed"
import GradualSpacingDifferent from "./ui/gradual-spacing-different"

function About() {
    return (
        <div className="flex about_main">
            <div className="scrollbar-hide about_left w-1/2 overflow-y-auto scrollbar-hidden pr-4 pl-6 space-y-6">
                <div className="headings_about">
                    <GradualSpacingDifferent
                        className="font-display mb-1 text-5xl font-bold -tracking-widest text-black dark:text-white "
                        text="About"
                    />
                </div>
                <div className="space-y-8 text-black/80 dark:text-white/80">
                    <section>
                        <GradualSpacingDifferent
                            className="font-display text-2xl font-semibold mb-4 -tracking-widest text-black dark:text-white "
                            text="Our Vision"
                        />
                        <p className="text-lg leading-relaxed">
                            We believe that groundbreaking mathematical solutions can come from anywhere.
                            By leveraging blockchain technology, we've created a trustless environment
                            where researchers, academicians, and problem solvers worldwide can collaborate,
                            compete, and contribute to mathematical advancement.
                        </p>
                    </section>

                    <section>
                        <GradualSpacingDifferent
                            className="font-display text-2xl font-semibold mb-4 -tracking-widest text-black dark:text-white "
                            text="For Problem Posters"
                        />
                        <p className="text-lg leading-relaxed">
                            Post your challenging mathematical problems with staked ETH as rewards.
                            Review submitted solutions and build your reputation in the community
                            while contributing to mathematical advancement.
                        </p>
                    </section>

                    <section>
                        <GradualSpacingDifferent
                            className="font-display text-2xl font-semibold mb-4 -tracking-widest text-black dark:text-white "
                            text="For Problem Solvers"
                        />
                        <p className="text-lg leading-relaxed">
                            Browse through a curated marketplace of mathematical challenges.
                            Submit your solutions securely, earn ETH rewards, and receive
                            on-chain attestations for your mathematical achievements.
                        </p>
                    </section>

                    <section>
                        <GradualSpacingDifferent
                            className="font-display text-2xl font-semibold mb-4 -tracking-widest text-black dark:text-white "
                            text="Decentralized Trust"
                        />
                        <p className="text-lg leading-relaxed">
                            Our smart contracts ensure automatic reward distribution upon solution
                            approval. Every solved problem creates an immutable attestation on the
                            Ethereum blockchain, building your verifiable track record.
                        </p>
                    </section>

                    <section>
                        <GradualSpacingDifferent
                            className="font-display text-2xl font-semibold mb-4 -tracking-widest text-black dark:text-white "
                            text="Community Guidlines"
                        />
                        <p className="text-lg leading-relaxed">
                            We foster an environment of intellectual honesty, rigorous verification,
                            and collaborative learning. Clear problem statements and comprehensive
                            solutions are at the heart of our community.
                        </p>
                    </section>

                    <section>
                        <GradualSpacingDifferent
                            className="font-display text-2xl font-semibold mb-4 -tracking-widest text-black dark:text-white "
                            text="Join Us"
                        />
                        <p className="text-lg leading-relaxed">
                            Whether you're a seasoned mathematician, researcher, or enthusiastic
                            problem solver, our platform provides the space to engage with
                            challenging problems and showcase your expertise.
                        </p>
                    </section>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center bg-transparent" >
            <TechnologyUsed/>
            </div>
        
        </div>
    )
}

export default About
