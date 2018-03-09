/*
 *  Typings for jss-preset-default v4.3.0
 */
import { JSSOptions } from "jss";

/**
 * Options object for the defaultUnits: each key is a CSS property,
 * with the value the corresponding default unit for that property.
 */
export type DefaultUnitPluginOptions = {
    [cssProperty: string]: string;
}

export type PresetPluginOptions = Partial<{
    template: {},
    global: {},
    extend: {},
    nested: {},
    compose: {},
    camelCase: {},
    defaultUnit: DefaultUnitPluginOptions,
    expand: {},
    vendorPrefixer: {},
    propsSort: {},
}>

/**
 * Build the plugins included in this preset.  Accepts options for each plugin
 */
export default function preset(
    options?: PresetPluginOptions
): Pick<JSSOptions, "plugins">
