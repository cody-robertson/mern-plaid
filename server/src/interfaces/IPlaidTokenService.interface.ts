interface IPlaidTokenService {
    generateLinkToken(userId: string): Promise<string>;
}

export default IPlaidTokenService;
