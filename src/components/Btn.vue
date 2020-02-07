<template>
    <component :is="type" :href="href" class="button">
    </component>
</template>

<script>
    export default {
        name: "Btn",
        props: {
            href: {
                type: String,
                default: null
            },
            to: {
                type: String,
                default: null
            }
        },
        computed: {
            type() {
                if (this.href) {
                    return 'a'
                } else {
                    return 'button'
                }
            }
        }
    }
</script>