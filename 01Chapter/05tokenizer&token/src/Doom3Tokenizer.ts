export interface IDoom3Token {

    reset(): void;

    isString(str: string): boolean;

    readonly type: ETokenType;

    getString(): string;
    getFloat(): number;
    getInt(): number;
}

export interface IDoom3Tokenizer  {
    setSource(source: string): void;//设置要解析的字符串
    reset(): void;//重置当前索引为0
    getNextToken(token: IDoom3Token): boolean;//获取下一个token
    // createIDoom3Token(): IDoom3Token;

}