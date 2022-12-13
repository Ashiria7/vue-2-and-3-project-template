import { defineComponent, openBlock, createElementBlock, toDisplayString } from 'vue';

var _sfc_main = /*#__PURE__*/ defineComponent({
    __name: 'hello',
    props: {
        name: { default: 'world' }
    },
    setup(__props) {
        const props = __props;
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("span", null, "hello " + toDisplayString(props.name), 1 /* TEXT */));
        };
    }
});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

var hello = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "hello.vue"]]);

export { hello as Hello };
//# sourceMappingURL=index.esm.js.map
