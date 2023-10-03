import ExpressConfig from './api/express-config'

class App {
    // Loads your Server
    public loadServer(): void {
        try {
            const server = ExpressConfig.initExpress();
            // TODO define conect Database, redist, socket..
        } catch (e) {
            // add log error
        }
    }
}

export default new App();
