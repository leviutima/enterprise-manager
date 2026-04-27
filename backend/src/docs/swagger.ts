export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Enterprise Gen API",
    version: "1.0.0",
    description: "Documentação da API",
  },
  paths: {
    "/enterprise-prod-instance/api/users": {
      get: {
        summary: "Lista todos os usuários",
        tags: ["Users"],
        responses: {
          200: { description: "Lista de usuários retornada com sucesso" },
          500: { description: "Erro interno do servidor" },
        },
      },
      post: {
        summary: "Cria um usuário",
        tags: ["Users"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "surname", "email", "password", "birthDate", "cpf", "address", "role"],
                properties: {
                  name:      { type: "string", example: "Levi Yuki" },
                  surname:   { type: "string", example: "Utima" },
                  email:     { type: "string", example: "levi.utima@gmail.com" },
                  password:  { type: "string", example: "senha123" },
                  birthDate: { type: "string", format: "date", example: "2004-08-18" },
                  cpf:       { type: "string", example: "237.346.981-70" },
                  role: {
                    type: "string",
                    enum: ["ADMIN", "USER", "MANAGER"],
                    example: "USER",
                  },
                  sectorId:     { type: "string", example: "uuid-do-setor" },
                  enterpriseId: { type: "string", example: "uuid-da-empresa" },
                  phone: {type: "string", example: "11992902332"},
                  address: {
                    type: "object",
                    required: ["zipcode", "street", "city", "state"],
                    properties: {
                      zipcode:      { type: "string", example: "01310-100" },
                      street:       { type: "string", example: "Av. Paulista" },
                      city:         { type: "string", example: "São Paulo" },
                      state:        { type: "string", example: "SP" },
                      number:       { type: "integer", example: 1000 },
                      complement:   { type: "string", example: "Apto 42" },
                      neighborhood: { type: "string", example: "Bela Vista" },
                    },
                  },
                  active: {type: "boolean", format: [true, false], example: true}
                },
              },
            },
          },
        },
        responses: {
          201: { description: "Usuário criado com sucesso" },
          400: { description: "Dados inválidos" },
          500: { description: "Erro interno do servidor" },
        },
      },
    },

    "/enterprise-prod-instance/api/users/{email}": {
      get: {
        summary: "Busca usuário por email",
        tags: ["Users"],
        parameters: [
          {
            name: "email",
            in: "path",
            required: true,
            schema: { type: "string" },
            example: "levi.utima@gmail.com",
          },
        ],
        responses: {
          200: { description: "Usuário encontrado" },
          404: { description: "Usuário não encontrado" },
          500: { description: "Erro interno do servidor" },
        },
      },
    },

    "/enterprise-prod-instance/api/users/{id}": {
      put: {
        summary: "Atualiza um usuário",
        tags: ["Users"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            example: "uuid-do-usuario",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name:    { type: "string", example: "Levi Atualizado" },
                  surname: { type: "string", example: "Utima" },
                  email:   { type: "string", example: "novo@email.com" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Usuário atualizado com sucesso" },
          400: { description: "Id inválido" },
          500: { description: "Erro interno do servidor" },
        },
      },
      delete: {
        summary: "Deleta um usuário",
        tags: ["Users"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            example: "uuid-do-usuario",
          },
        ],
        responses: {
          200: { description: "Usuário deletado com sucesso" },
          400: { description: "Id inválido" },
          500: { description: "Erro interno do servidor" },
        },
      },
    },

    "/enterprise-prod-instance/api/auth/login": {
      post: {
        summary: "Realiza login do usuário",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["email", "password"],
                properties: {
                  email:    { type: "string", example: "levi.utima@gmail.com" },
                  password: { type: "string", example: "senha123" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Login realizado com sucesso — cookie 'token' setado" },
          401: { description: "Credenciais inválidas" },
        },
      },
    },

    "/enterprise-prod-instance/api/auth/logout": {
      post: {
        summary: "Realiza logout do usuário",
        tags: ["Auth"],
        responses: {
          200: { description: "Logout realizado com sucesso — cookie 'token' removido" },
        },
      },
    },

    "/enterprise-prod-instance/api/users/{id}/password": {
      patch: {
        summary: "Atualiza a senha do usuário",
        tags: ["Users"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            example: "uuid-do-usuario",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["currentPassword", "newPassword", "confirmPassword"],
                properties: {
                  currentPassword: { type: "string", example: "senha123" },
                  newPassword:     { type: "string", example: "novaSenha123" },
                  confirmPassword: { type: "string", example: "novaSenha123" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Senha atualizada com sucesso" },
          400: { description: "Senha atual incorreta ou Id inválido" },
          500: { description: "Erro interno do servidor" },
        },
      },
    },
  },
};