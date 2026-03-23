<template>
    <div class="tw-mt-24 lg:tw-mt-64 tw-mb-20 tw-px-5">
        <div class="row">
            <div class="sm:tw-px-10">
                <span class="tw-text-2xl tw-font-light tw-text-primary-text-color">04.</span><span
                    class="tw-text-3xl sm:tw-text-4xl sm:tw-pl-4 tw-text-gray-300">Engineering Philosophy</span>
            </div>
            <div class="tw-border-t tw-mt-5 tw-mx-auto sm:tw-mx-0 tw-border-gray-700 tw-w-80"></div>
        </div>

        <div class="tw-mt-12 lg:tw-mx-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-12">
            <div data-aos="fade-up" class="tw-text-gray-400 tw-text-lg tw-font-light tw-leading-relaxed">
                <p class="tw-mb-6">
                    Over the past 7 years, I've transitioned from building simple user interfaces to architecting
                    complex, cloud-native platforms that process high-velocity data. My core philosophy is that
                    exceptional software is born at the intersection of <strong
                        class="tw-text-white tw-font-medium">scalability, security, and developer experience.</strong>
                </p>
                <p class="tw-mb-6">
                    Whether I'm designing a real-time messaging protocol for <span
                        class="tw-text-primary-text-color">Abaaly</span> or an encrypted telemetry system for <span
                        class="tw-text-primary-text-color">Cloud-Eye</span>, I approach every engineering challenge with
                    a "Security-First" mindset, ensuring that performance never comes at the cost of data integrity.
                </p>
                <p>
                    I believe that code is read far more often than it is written. Therefore, building a robust library
                    of highly-testable components and adhering strictly to SOLID principles is not just a
                    preference—it's a requirement for sustainable growth.
                </p>
            </div>

            <div class="tw-flex tw-flex-col tw-mt-4 md:tw-mt-0">
                <!-- Principle 1 -->
                <div data-aos="fade-left" data-aos-delay="100"
                    class="tw-flex tw-items-start tw-py-6 tw-border-b tw-border-gray-800">
                    <div class="tw-p-4 tw-bg-gray-800/50 tw-rounded-lg tw-mr-6">
                        <q-icon name="speed" size="md" class="tw-text-primary-text-color" />
                    </div>
                    <div>
                        <h4 class="tw-text-white tw-text-xl tw-font-medium tw-mb-2">Scalable by Default</h4>
                        <p class="tw-text-base tw-text-gray-400 tw-font-light tw-leading-relaxed">Systems should be
                            designed to handle 10x
                            today's volume. I leverage asynchronous workflows and decoupled event-driven architectures
                            (Kafka/Websockets) to eliminate chokepoints.</p>
                    </div>
                </div>

                <!-- Principle 2 -->
                <div data-aos="fade-left" data-aos-delay="200"
                    class="tw-flex tw-items-start tw-py-6 tw-border-b tw-border-gray-800">
                    <div class="tw-p-4 tw-bg-gray-800/50 tw-rounded-lg tw-mr-6">
                        <q-icon name="verified_user" size="md" class="tw-text-primary-text-color" />
                    </div>
                    <div>
                        <h4 class="tw-text-white tw-text-xl tw-font-medium tw-mb-2">Zero-Trust Security</h4>
                        <p class="tw-text-base tw-text-gray-400 tw-font-light tw-leading-relaxed">Building platforms
                            handling highly
                            sensitive digital identities demands a zero-trust model. Every request is verified, every
                            token is rotated, and all sensitive data is encrypted at rest.</p>
                    </div>
                </div>

                <!-- Principle 3 -->
                <div data-aos="fade-left" data-aos-delay="300" class="tw-flex tw-items-start tw-py-6">
                    <div class="tw-p-4 tw-bg-gray-800/50 tw-rounded-lg tw-mr-6">
                        <q-icon name="clean_hands" size="md" class="tw-text-primary-text-color" />
                    </div>
                    <div>
                        <h4 class="tw-text-white tw-text-xl tw-font-medium tw-mb-2">Clean, Pragmatic Code</h4>
                        <p class="tw-text-base tw-text-gray-400 tw-font-light tw-leading-relaxed">I balance "perfect"
                            architecture with
                            shipping product. I enforce rigid CI/CD pipelines and PR reviews so the codebase remains
                            intuitive for the next engineer who touches it.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "PhilosophySection",
    setup() {
        return {}
    }
})
</script>
