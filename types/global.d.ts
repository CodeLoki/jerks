// Types for compiled templates
declare module 'jerks/templates/*' {
    import { TemplateFactory } from 'ember-cli-htmlbars';

    const tmpl: TemplateFactory;
    export default tmpl;
}
