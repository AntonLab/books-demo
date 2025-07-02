export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'

export interface BuildPaths {
  [pathName: string]: string
}

export interface BuildOptions extends EnvVariables {
  paths: BuildPaths
}

export interface EnvVariables {
  analyzer?: boolean
  mode?: BuildMode
  platform?: BuildPlatform
  port?: number
}
