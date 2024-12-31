export interface LegionConfig {
    name?: string;
    version?: string;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    scripts?: Record<string, string>;
    mode?: 'development' | 'production';
}

export interface PolyfillOptions {
    dryRun: boolean;
    generateDwarf: boolean,
}

export interface CommonOptions {
    dryRun?: boolean;
    debug?: boolean;
    release?: boolean;
    watch?: boolean;
    mode?: string;
}

export interface BuildOptions extends CommonOptions {
    optimization?: 'O1' | 'O2' | 'O3' | 'Os' | 'Oz';
}

export interface PublishOptions extends CommonOptions {
    access?: 'public' | 'private';
}