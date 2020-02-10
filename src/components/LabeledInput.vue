<template>
    <div class="labeledInput">
        <label>{{labelText}}</label>
        <input :type="type"
               v-model="inputValue"
        />
    </div>
</template>

<script>
    export default {
        name: "LabeledInput",
        props: ["labelText", "value", "type"],
        computed: {
            inputValue: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .labeledInput {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        margin: 8px 0 8px 0;
        height: 30px;
        align-content: center;
        text-align: center;
    }

    label {
        display: block;
        width: 20%;
        height: 100%;
        line-height: 170%;
        max-width: 80px;
        margin-right: 5px;
    }

    input {
        width: 30%;
        min-width: 200px;
    }

    @media (min-width: $desktop-min-width) {
        .labeledInput {
            width: 85%;
        }
    }
</style>