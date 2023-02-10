export function isValidCPF(cpf: string): boolean {
  if (!cpf) {
    return false;
  }
  cpf = cpf.replace(/[.-]/g, '');
  let sum = 0; // Variável que irá armazenar a soma dos resultados dos cálculos
  let remainder; // Variável que irá armazenar o resto da divisão

  // Verifica se todos os dígitos são iguais
  if (cpf.match(/^(.)\1+$/)) return false; // Se forem iguais, retorna falso

  // Realiza o primeiro cálculo
  for (let i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;

  // Verifica se o resultado do cálculo é igual ao dígito verificador
  if (remainder == 10 || remainder == 11) remainder = 0; // Se for 10 ou 11, o resto da divisão é 0
  if (remainder != parseInt(cpf.substring(9, 10))) return false; // Se o resto não for igual ao dígito verificador, retorna falso

  // Realiza o segundo cálculo
  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  remainder = (sum * 10) % 11;

  // Verifica se o resultado do cálculo é igual ao segundo dígito verificador
  if (remainder == 10 || remainder == 11) remainder = 0; // Se for 10 ou 11, o resto da divisão é 0
  if (remainder != parseInt(cpf.substring(10, 11))) return false; // Se o resto não for igual ao dígito verificador, retorna falso

  // Se não houve problema nos cálculos, retorna verdadeiro
  return true;
}
