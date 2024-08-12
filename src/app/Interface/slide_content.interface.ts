export interface SlideContent {
    content: String
}

export interface Step {
    id: number,
    title: string,
    description: string,
    status:string,
    percentage: number | null
}
