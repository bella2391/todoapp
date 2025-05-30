export interface Config {
  name: string;
  year: number;
  url: string;
  og: {
    title: string;
    description: string;
    image: string;
    url: string;
  }
  social: {
    me: {
      portfolio: {
        url: string
      }
    }
    discord: {
      this: {
        url: string;
      }
    }
    github: {
      this: {
        url: string;
      }
    }
  }
  server: {
    port: string;
    url: string;
    root: string;
    host: string;
    logo: {
      url: string;
    }
    modules: {
      jwt: {
        secret: string;
      }
      mysql: {
        host: string;
        user: string;
        password: string;
        database: string;
      }
      passport: {
        x: {
          key: string;
          secret: string;
        }
        google: {
          key: string;
          secret: string;
        }
        discord: {
          key: string;
          secret: string;
        }
      }
      express_session: {
        secret: string;
      }
      nodemailer: {
        host: string;
        port: string | number;
        user: string;
        from: string;
        password: string;
      }
    }
  }
  client: {
    icon: {
      random: {
        enable: boolean;
      }
      path: string;
    }
  }
}
