import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hello world!';
  }

  getolaBSM(): string {
    return 'Orientação ao Futuro<br> resposabilidade Pessoal<br>mentalidade de Crescimento<br>Persintencia<br>trabalho em Equipe<br>Atenção aos Detalhes<br>Proatividade<br>Comunicação<br>';
  }

getnivel(): string {
  return 'tudo que for possivel';
}





}
