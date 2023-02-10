export interface IConsultarCpf {
  nome: string;
  cpf: string;
  status: string;
  contas: [
    {
      tipo: string;
      numero: string;
    },
    {
      tipo: string;
      numero: string;
    }
  ];
}
