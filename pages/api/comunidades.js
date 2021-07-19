import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {
        const TOKEN = '5e7b5039def229873641373c0c05d5';
        const client = new SiteClient(TOKEN);
        //No "mundo real", precisa validar os dados antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "977044", //Model ID do DatoCMS
            ...request.body,
            //title: "Comunidade de teste",
            //imageUrl: "https://picsum.photos/200/300",
            //creatorSlug: "fernandotanesemascara",
        });
        console.log(registroCriado);
        response.json({
            dados: 'algum dado qualquer',
            registroCriado: registroCriado,
        });
        return;
    };
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    });
};