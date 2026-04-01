import{R as u,U as n,p as t,X as s}from"./entry.client-CptE4pEQ.js";const r=s(`
  query SchemaWarmup($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      openapi
    }
  }
`),y=()=>{const{input:e,type:p}=u(),a=n(r,{input:e,type:p});t({...a,enabled:typeof window<"u",notifyOnChangeProps:[]})};export{y as u};
//# sourceMappingURL=useWarmupSchema-CgXo-8bs.js.map
