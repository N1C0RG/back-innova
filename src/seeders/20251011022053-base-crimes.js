'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Crimes', [
    {
      id: 1,
      name: 'Contrabando',
      description: 'Ingreso o salida de mercancías sin control aduanero.',
      interested_entity: 'Aduanas',
      weight: 3,
      warning: 'Revisar documentación aduanera y mercancías transportadas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 2,
      name: 'Fraude aduanero',
      description: 'Engaño o falsificación en operaciones aduaneras.',
      interested_entity: 'Aduanas',
      weight: 3,
      warning: 'Verificar veracidad de declaraciones y facturas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 3,
      name: 'Tráfico de fauna silvestre',
      description: 'Comercio o transporte de animales o partes de especies protegidas.',
      interested_entity: 'SAG',
      weight: 3,
      warning: 'Revisar transporte de animales o productos de origen animal.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 4,
      name: 'Caza o captura de especies protegidas',
      description: 'Captura o comercio ilegal de fauna protegida.',
      interested_entity: 'SAG',
      weight: 3,
      warning: 'Revisar especies y permisos de caza o transporte.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 5,
      name: 'Ingreso ilegal de especies animales o vegetales',
      description: 'Introducción no autorizada de flora o fauna extranjera.',
      interested_entity: 'SAG',
      weight: 3,
      warning: 'Revisar presencia de productos agropecuarios no declarados.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 6,
      name: 'Evasión tributaria',
      description: 'Eludir impuestos o derechos de importación/exportación.',
      interested_entity: 'Aduanas',
      weight: 2,
      warning: 'Verificar valores declarados y origen de los bienes.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 7,
      name: 'Receptación de vehículo motorizado',
      description: 'Adquisición o tenencia de vehículos robados.',
      interested_entity: 'Aduanas',
      weight: 2,
      warning: 'Revisar documentos de propiedad y número de serie de vehículos.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 8,
      name: 'Tráfico de residuos peligrosos',
      description: 'Importación o transporte de desechos peligrosos.',
      interested_entity: 'Aduanas',
      weight: 3,
      warning: 'Revisar documentación ambiental y de transporte de residuos.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 9,
      name: 'Falsificación de etiquetas de origen',
      description: 'Alteración o falsificación del origen de productos agrícolas.',
      interested_entity: 'SAG',
      weight: 2,
      warning: 'Revisar etiquetado y certificados de origen de productos.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 10,
      name: 'Comercio ilegal de productos veterinarios',
      description: 'Venta o transporte de medicamentos o productos sin autorización sanitaria.',
      interested_entity: 'SAG',
      weight: 2,
      warning: 'Revisar carga por productos veterinarios no autorizados.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 11,
      name: 'Transporte de productos agrícolas sin certificado fitosanitario',
      description: 'Traslado de productos agrícolas sin certificación requerida.',
      interested_entity: 'SAG',
      weight: 1,
      warning: 'Solicitar certificado fitosanitario antes del ingreso.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 12,
      name: 'Caza ilegal',
      description: 'Cazar animales fuera de temporada o sin permisos.',
      interested_entity: 'SAG',
      weight: 2,
      warning: 'Verificar permisos de caza y transporte de animales.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 13,
      name: 'Comercio ilegal de fauna protegida',
      description: 'Venta o transporte de especies amenazadas.',
      interested_entity: 'SAG',
      weight: 3,
      warning: 'Verificar contenido de carga y permisos de fauna.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 14,
      name: 'Tráfico de marfil o partes de animales protegidos',
      description: 'Transporte o venta de partes de animales protegidos internacionalmente.',
      interested_entity: 'SAG',
      weight: 3,
      warning: 'Revisar si hay partes de especies protegidas o CITES.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 15,
      name: 'Homicidio',
      description: 'Privar de la vida a otra persona.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 16,
      name: 'Parricidio',
      description: 'Dar muerte a un familiar directo.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 17,
      name: 'Femicidio',
      description: 'Dar muerte a una mujer por razón de género.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 18,
      name: 'Infanticidio',
      description: 'Dar muerte a un hijo recién nacido.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 19,
      name: 'Lesiones graves',
      description: 'Causar daño grave a la integridad física de otro.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 20,
      name: 'Secuestro',
      description: 'Privar de libertad a una persona.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 21,
      name: 'Amenazas',
      description: 'Intimidar a otro con causar un mal grave.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 22,
      name: 'Violación',
      description: 'Acceso carnal no consentido mediante violencia.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 23,
      name: 'Abuso sexual',
      description: 'Actos sexuales sin consentimiento.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 24,
      name: 'Robo con violencia',
      description: 'Sustracción de bienes con uso de fuerza o intimidación.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 25,
      name: 'Hurto',
      description: 'Sustracción de bienes sin fuerza ni intimidación.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 26,
      name: 'Estafa',
      description: 'Obtener beneficio económico mediante engaño.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 27,
      name: 'Falsificación de documento público',
      description: 'Alterar o crear documentos oficiales falsos.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 28,
      name: 'Falsificación de documentos privados',
      description: 'Alterar o crear documentos privados falsos.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 29,
      name: 'Corrupción de funcionarios públicos',
      description: 'Sobornar o recibir sobornos como funcionario.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 30,
      name: 'Tráfico ilícito de estupefacientes',
      description: 'Producir o comercializar drogas ilegales.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 31,
      name: 'Microtráfico de drogas',
      description: 'Venta o distribución de pequeñas cantidades de drogas ilegales.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 32,
      name: 'Cultivo ilegal de marihuana',
      description: 'Cultivar plantas de cannabis sin autorización.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 33,
      name: 'Lavado de activos',
      description: 'Ocultar el origen ilícito de bienes o dinero.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 34,
      name: 'Tráfico de armas',
      description: 'Comercializar armas sin autorización.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 35,
      name: 'Tenencia ilegal de armas de fuego',
      description: 'Poseer armas sin los permisos correspondientes.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 36,
      name: 'Fabricación o modificación ilegal de armas',
      description: 'Alterar armas o fabricar sin control estatal.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 37,
      name: 'Tenencia ilegal de explosivos',
      description: 'Poseer explosivos sin autorización legal.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 38,
      name: 'Tráfico de personas',
      description: 'Captar o transportar personas con fines de explotación.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 39,
      name: 'Uso de pasaporte falso',
      description: 'Utilizar documentos de viaje falsificados.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 40,
      name: 'Usurpación',
      description: 'Apropiarse de un inmueble ajeno o suplantar identidad.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 41,
      name: 'Daños',
      description: 'Destruir o deteriorar propiedad ajena.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 42,
      name: 'Asociación ilícita',
      description: 'Participar en grupo destinado a cometer delitos.',
      interested_entity: '',
      weight: null,
      warning: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Crimes', null, {});
  }
};
