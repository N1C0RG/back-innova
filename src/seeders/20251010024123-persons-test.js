'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Persons', [
      {
      id: 1,
      name: 'Jorge Díaz',
      rut: '8758275-2',
      email: 'jorge.díaz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-01-10 21:41'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Francisca Fuentes',
      rut: '16104320-4',
      email: 'francisca.fuentes@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-04-21 21:39'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'Valentina Muñoz',
      rut: '22603624-9',
      email: 'valentina.muñoz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-06-12 15:02'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 4,
      name: 'Ana Torres',
      rut: '7663059-8',
      email: 'ana.torres@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-11-22 16:05'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 5,
      name: 'Miguel Rojas',
      rut: '14577916-8',
      email: 'miguel.rojas@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-09-04 07:36'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 6,
      name: 'Tomás Navarro',
      rut: '5989145-9',
      email: 'tomás.navarro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-06-07 08:37'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 7,
      name: 'Felipe López',
      rut: '12078037-2',
      email: 'felipe.lópez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-06-02 05:31'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 8,
      name: 'Sofía Vega',
      rut: '16432996-8',
      email: 'sofía.vega@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-11-08 16:36'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 9,
      name: 'Miguel Rojas',
      rut: '21949315-3',
      email: 'miguel.rojas@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-05-29 06:11'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 10,
      name: 'Tomás Navarro',
      rut: '9930772-0',
      email: 'tomás.navarro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-03-04 11:03'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 11,
      name: 'Juan Pérez',
      rut: '10848867-2',
      email: 'juan.pérez@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-03-15 15:39'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 12,
      name: 'Juan Pérez',
      rut: '15771806-4',
      email: 'juan.pérez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-01-22 16:51'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 13,
      name: 'Camila Reyes',
      rut: '22383739-4',
      email: 'camila.reyes@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-01-18 11:46'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 14,
      name: 'Constanza Silva',
      rut: '13359302-4',
      email: 'constanza.silva@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-04-08 20:40'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 15,
      name: 'Lucía Morales',
      rut: '22619789-7',
      email: 'lucía.morales@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-03-15 15:14'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 16,
      name: 'Cristóbal Bravo',
      rut: '11735570-7',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-12-16 03:30'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 17,
      name: 'Cristóbal Bravo',
      rut: '19195141-2',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-04-14 04:31'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 18,
      name: 'Valentina Muñoz',
      rut: '8822644-6',
      email: 'valentina.muñoz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-08-25 07:40'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 19,
      name: 'Ricardo Campos',
      rut: '19543814-0',
      email: 'ricardo.campos@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-05-20 03:56'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 20,
      name: 'María González',
      rut: '5515658-8',
      email: 'maría.gonzález@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-11-18 14:19'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 21,
      name: 'María González',
      rut: '22791687-3',
      email: 'maría.gonzález@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-06-16 03:05'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 22,
      name: 'Camila Reyes',
      rut: '7965316-6',
      email: 'camila.reyes@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-12-29 04:02'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 23,
      name: 'Felipe López',
      rut: '15582935-2',
      email: 'felipe.lópez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-02-23 04:45'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 24,
      name: 'Lucía Morales',
      rut: '6390733-7',
      email: 'lucía.morales@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-04-23 23:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 25,
      name: 'Valentina Muñoz',
      rut: '23380870-1',
      email: 'valentina.muñoz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-01-06 22:11'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 26,
      name: 'Carlos Soto',
      rut: '17074638-6',
      email: 'carlos.soto@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-02-17 19:26'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 27,
      name: 'Pedro Ramírez',
      rut: '13513948-2',
      email: 'pedro.ramírez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-02-08 14:05'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 28,
      name: 'Daniela Pizarro',
      rut: '6257226-0',
      email: 'daniela.pizarro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-11-02 01:54'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 29,
      name: 'Francisca Fuentes',
      rut: '11701205-8',
      email: 'francisca.fuentes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-08-23 00:24'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 30,
      name: 'Carlos Soto',
      rut: '15932319-K',
      email: 'carlos.soto@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-03-29 07:57'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 31,
      name: 'Francisca Fuentes',
      rut: '15569694-3',
      email: 'francisca.fuentes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-11-23 11:59'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 32,
      name: 'Sofía Vega',
      rut: '1331430-2',
      email: 'sofía.vega@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-09-05 06:37'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 33,
      name: 'Ricardo Campos',
      rut: '13370684-8',
      email: 'ricardo.campos@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-07-19 13:45'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 34,
      name: 'Constanza Silva',
      rut: '24975183-7',
      email: 'constanza.silva@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-09-05 09:30'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 35,
      name: 'Fernanda Castro',
      rut: '2595638-9',
      email: 'fernanda.castro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-06-25 04:23'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 36,
      name: 'Daniela Pizarro',
      rut: '22657391-2',
      email: 'daniela.pizarro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-02-25 14:48'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 37,
      name: 'Cristóbal Bravo',
      rut: '22621180-1',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-09-13 21:56'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 38,
      name: 'Fernanda Castro',
      rut: '10245006-K',
      email: 'fernanda.castro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-02-13 13:30'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 39,
      name: 'Cristóbal Bravo',
      rut: '9088394-8',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-02-03 09:40'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 40,
      name: 'Jorge Díaz',
      rut: '20822940-5',
      email: 'jorge.díaz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-11-21 06:50'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 41,
      name: 'Miguel Rojas',
      rut: '20000632-5',
      email: 'miguel.rojas@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-05-15 06:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 42,
      name: 'Sofía Vega',
      rut: '1439363-9',
      email: 'sofía.vega@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-04-01 23:40'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 43,
      name: 'Valentina Muñoz',
      rut: '19145786-9',
      email: 'valentina.muñoz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-04-10 20:55'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 44,
      name: 'Felipe López',
      rut: '23764521-5',
      email: 'felipe.lópez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-05-20 15:24'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 45,
      name: 'Jorge Díaz',
      rut: '24023963-9',
      email: 'jorge.díaz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-03-16 03:53'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 46,
      name: 'Daniela Pizarro',
      rut: '21746604-6',
      email: 'daniela.pizarro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-12-24 23:47'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 47,
      name: 'Jorge Díaz',
      rut: '3413187-8',
      email: 'jorge.díaz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-01-05 07:17'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 48,
      name: 'Daniela Pizarro',
      rut: '11959204-5',
      email: 'daniela.pizarro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-01-06 00:50'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 49,
      name: 'Camila Reyes',
      rut: '13954785-7',
      email: 'camila.reyes@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-12-04 18:23'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 50,
      name: 'Cristóbal Bravo',
      rut: '16504056-7',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-04-03 12:16'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 51,
      name: 'Ignacio Herrera',
      rut: '4340918-8',
      email: 'ignacio.herrera@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-04-29 21:59'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 52,
      name: 'Fernanda Castro',
      rut: '6650697-3',
      email: 'fernanda.castro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-12-23 04:14'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 53,
      name: 'Sofía Vega',
      rut: '19246758-8',
      email: 'sofía.vega@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-05-25 12:32'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 54,
      name: 'Valentina Muñoz',
      rut: '8689534-1',
      email: 'valentina.muñoz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-04-29 06:04'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 55,
      name: 'Ricardo Campos',
      rut: '17146300-0',
      email: 'ricardo.campos@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-10-09 05:30'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 56,
      name: 'Felipe López',
      rut: '16275409-7',
      email: 'felipe.lópez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-10-08 22:14'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 57,
      name: 'Miguel Rojas',
      rut: '19779116-8',
      email: 'miguel.rojas@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-11-16 12:17'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 58,
      name: 'Carlos Soto',
      rut: '20176074-4',
      email: 'carlos.soto@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-05-25 08:29'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 59,
      name: 'Ana Torres',
      rut: '4144219-5',
      email: 'ana.torres@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-06-08 15:35'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 60,
      name: 'Valentina Muñoz',
      rut: '17955775-1',
      email: 'valentina.muñoz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-06-06 07:23'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 61,
      name: 'Francisca Fuentes',
      rut: '11053107-K',
      email: 'francisca.fuentes@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-02-10 19:13'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 62,
      name: 'Tomás Navarro',
      rut: '14703190-9',
      email: 'tomás.navarro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-12-24 02:27'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 63,
      name: 'Camila Reyes',
      rut: '19417580-7',
      email: 'camila.reyes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-08-02 00:30'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 64,
      name: 'Fernanda Castro',
      rut: '21342103-0',
      email: 'fernanda.castro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-04-23 02:54'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 65,
      name: 'Fernanda Castro',
      rut: '12118277-0',
      email: 'fernanda.castro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-11-29 03:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 66,
      name: 'Ignacio Herrera',
      rut: '19108473-3',
      email: 'ignacio.herrera@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-11-15 18:06'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 67,
      name: 'Ricardo Campos',
      rut: '22420424-4',
      email: 'ricardo.campos@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-02-16 13:06'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 68,
      name: 'Ana Torres',
      rut: '24649287-5',
      email: 'ana.torres@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-10-22 08:05'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 69,
      name: 'Camila Reyes',
      rut: '9443734-2',
      email: 'camila.reyes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-10-21 18:13'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 70,
      name: 'Miguel Rojas',
      rut: '6938933-5',
      email: 'miguel.rojas@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-11-17 05:59'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 71,
      name: 'Miguel Rojas',
      rut: '15125615-1',
      email: 'miguel.rojas@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-11-19 21:19'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 72,
      name: 'Tomás Navarro',
      rut: '24810793-6',
      email: 'tomás.navarro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-03-31 09:53'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 73,
      name: 'María González',
      rut: '10170152-4',
      email: 'maría.gonzález@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-08-03 02:51'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 74,
      name: 'Lucía Morales',
      rut: '24870875-0',
      email: 'lucía.morales@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-10-31 12:19'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 75,
      name: 'María González',
      rut: '10608094-8',
      email: 'maría.gonzález@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-04-16 05:38'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 76,
      name: 'María González',
      rut: '3535747-3',
      email: 'maría.gonzález@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-12-25 11:52'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 77,
      name: 'Carlos Soto',
      rut: '16558922-9',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-07-13 07:11'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 78,
      name: 'Ignacio Herrera',
      rut: '7417335-3',
      email: 'ignacio.herrera@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-11-20 01:40'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 79,
      name: 'Ignacio Herrera',
      rut: '16057782-1',
      email: 'ignacio.herrera@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-03-07 15:22'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 80,
      name: 'María González',
      rut: '18961494-6',
      email: 'maría.gonzález@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-01-24 04:25'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 81,
      name: 'Constanza Silva',
      rut: '12334186-K',
      email: 'constanza.silva@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-03-04 04:11'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 82,
      name: 'Jorge Díaz',
      rut: '11216437-6',
      email: 'jorge.díaz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-11-01 04:24'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 83,
      name: 'María González',
      rut: '1180832-8',
      email: 'maría.gonzález@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-11-08 17:01'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 84,
      name: 'Jorge Díaz',
      rut: '7739031-K',
      email: 'jorge.díaz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-02-08 18:44'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 85,
      name: 'Miguel Rojas',
      rut: '23358154-2',
      email: 'miguel.rojas@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-07-03 04:17'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 86,
      name: 'Carlos Soto',
      rut: '17402994-3',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-11-29 08:35'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 87,
      name: 'Pedro Ramírez',
      rut: '21653772-9',
      email: 'pedro.ramírez@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-09-27 14:22'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 88,
      name: 'Ricardo Campos',
      rut: '21986327-3',
      email: 'ricardo.campos@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-04-20 14:17'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 89,
      name: 'Carlos Soto',
      rut: '5418714-9',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-07-19 16:44'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 90,
      name: 'Fernanda Castro',
      rut: '13584098-6',
      email: 'fernanda.castro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-09-04 01:16'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 91,
      name: 'Jorge Díaz',
      rut: '24125443-K',
      email: 'jorge.díaz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-11-24 19:45'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 92,
      name: 'Francisca Fuentes',
      rut: '21991511-6',
      email: 'francisca.fuentes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-05-19 13:28'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 93,
      name: 'Francisca Fuentes',
      rut: '8943743-1',
      email: 'francisca.fuentes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-09-24 11:53'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 94,
      name: 'Valentina Muñoz',
      rut: '2514699-4',
      email: 'valentina.muñoz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-03-05 19:10'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 95,
      name: 'Pedro Ramírez',
      rut: '17455688-K',
      email: 'pedro.ramírez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-04-30 23:41'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 96,
      name: 'Valentina Muñoz',
      rut: '11021749-8',
      email: 'valentina.muñoz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-01-31 21:25'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 97,
      name: 'Fernanda Castro',
      rut: '5348206-0',
      email: 'fernanda.castro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-10-29 17:08'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 98,
      name: 'Daniela Pizarro',
      rut: '8288736-8',
      email: 'daniela.pizarro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-07-27 01:10'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 99,
      name: 'Ricardo Campos',
      rut: '22725142-9',
      email: 'ricardo.campos@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-10-29 17:17'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 100,
      name: 'Felipe López',
      rut: '5678702-K',
      email: 'felipe.lópez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-06-06 22:50'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 101,
      name: 'Valentina Muñoz',
      rut: '5560863-5',
      email: 'valentina.muñoz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-12-30 12:12'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 102,
      name: 'Juan Pérez',
      rut: '14762485-K',
      email: 'juan.pérez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-10-17 18:39'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 103,
      name: 'Juan Pérez',
      rut: '18095628-7',
      email: 'juan.pérez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-05-19 10:57'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 104,
      name: 'Ignacio Herrera',
      rut: '23749824-2',
      email: 'ignacio.herrera@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-12-12 13:41'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 105,
      name: 'Constanza Silva',
      rut: '1120495-6',
      email: 'constanza.silva@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-11-22 12:34'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 106,
      name: 'Juan Pérez',
      rut: '24339306-0',
      email: 'juan.pérez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-10-28 16:57'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 107,
      name: 'Fernanda Castro',
      rut: '14335086-K',
      email: 'fernanda.castro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-12-27 17:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 108,
      name: 'Fernanda Castro',
      rut: '14803493-6',
      email: 'fernanda.castro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-03-18 05:31'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 109,
      name: 'Ignacio Herrera',
      rut: '22013318-9',
      email: 'ignacio.herrera@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-05-19 12:15'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 110,
      name: 'Lucía Morales',
      rut: '19074425-1',
      email: 'lucía.morales@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-07-08 22:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 111,
      name: 'Jorge Díaz',
      rut: '11152326-7',
      email: 'jorge.díaz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-12-29 11:59'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 112,
      name: 'Juan Pérez',
      rut: '12685530-9',
      email: 'juan.pérez@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-02-22 00:09'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 113,
      name: 'Lucía Morales',
      rut: '9840032-6',
      email: 'lucía.morales@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-04-22 12:49'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 114,
      name: 'Carlos Soto',
      rut: '14593307-K',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-12-15 04:50'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 115,
      name: 'Carlos Soto',
      rut: '22759451-5',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-02-16 12:57'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 116,
      name: 'Felipe López',
      rut: '8763053-1',
      email: 'felipe.lópez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-04-25 07:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 117,
      name: 'Fernanda Castro',
      rut: '5966886-8',
      email: 'fernanda.castro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-05-18 16:09'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 118,
      name: 'Ana Torres',
      rut: '15208183-8',
      email: 'ana.torres@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-04-06 03:44'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 119,
      name: 'María González',
      rut: '24021928-5',
      email: 'maría.gonzález@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-05-09 07:04'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 120,
      name: 'Jorge Díaz',
      rut: '22783612-K',
      email: 'jorge.díaz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-06-06 22:53'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 121,
      name: 'Francisca Fuentes',
      rut: '6916769-3',
      email: 'francisca.fuentes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-04-22 12:11'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 122,
      name: 'Tomás Navarro',
      rut: '8208626-8',
      email: 'tomás.navarro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-07-18 22:21'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 123,
      name: 'Felipe López',
      rut: '14351696-K',
      email: 'felipe.lópez@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-09-02 09:57'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 124,
      name: 'Jorge Díaz',
      rut: '19066871-1',
      email: 'jorge.díaz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-10-14 20:44'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 125,
      name: 'Constanza Silva',
      rut: '5382749-5',
      email: 'constanza.silva@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-04-07 22:59'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 126,
      name: 'Pedro Ramírez',
      rut: '22711111-5',
      email: 'pedro.ramírez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-07-16 04:09'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 127,
      name: 'Carlos Soto',
      rut: '19315649-5',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-09-08 22:26'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 128,
      name: 'Juan Pérez',
      rut: '6262452-0',
      email: 'juan.pérez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-04-10 01:43'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 129,
      name: 'Sofía Vega',
      rut: '15354035-1',
      email: 'sofía.vega@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-12-22 22:25'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 130,
      name: 'Ana Torres',
      rut: '10978790-2',
      email: 'ana.torres@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-03-05 00:23'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 131,
      name: 'Ricardo Campos',
      rut: '1209857-7',
      email: 'ricardo.campos@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-03-28 16:50'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 132,
      name: 'Daniela Pizarro',
      rut: '6758499-K',
      email: 'daniela.pizarro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-08-03 19:31'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 133,
      name: 'María González',
      rut: '3182007-3',
      email: 'maría.gonzález@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-11-25 03:13'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 134,
      name: 'Tomás Navarro',
      rut: '3124776-1',
      email: 'tomás.navarro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-01-28 03:29'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 135,
      name: 'Miguel Rojas',
      rut: '18947598-1',
      email: 'miguel.rojas@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-11-22 20:54'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 136,
      name: 'Ana Torres',
      rut: '10541669-3',
      email: 'ana.torres@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-06-29 13:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 137,
      name: 'Sofía Vega',
      rut: '1399123-5',
      email: 'sofía.vega@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-12-02 22:54'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 138,
      name: 'Felipe López',
      rut: '22825994-9',
      email: 'felipe.lópez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-03-17 23:35'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 139,
      name: 'Francisca Fuentes',
      rut: '17671178-4',
      email: 'francisca.fuentes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-11-09 12:15'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 140,
      name: 'Felipe López',
      rut: '8673782-9',
      email: 'felipe.lópez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-03-26 21:32'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 141,
      name: 'Juan Pérez',
      rut: '10412883-0',
      email: 'juan.pérez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-12-31 07:23'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 142,
      name: 'Ignacio Herrera',
      rut: '3667657-1',
      email: 'ignacio.herrera@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-12-30 05:12'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 143,
      name: 'Felipe López',
      rut: '1067012-3',
      email: 'felipe.lópez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-12-20 15:32'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 144,
      name: 'Ana Torres',
      rut: '8875044-7',
      email: 'ana.torres@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-03-08 02:24'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 145,
      name: 'Ignacio Herrera',
      rut: '6633132-3',
      email: 'ignacio.herrera@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-03-04 14:48'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 146,
      name: 'Camila Reyes',
      rut: '7019111-9',
      email: 'camila.reyes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-08-26 10:26'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 147,
      name: 'Carlos Soto',
      rut: '5119776-2',
      email: 'carlos.soto@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-08-16 15:47'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 148,
      name: 'Camila Reyes',
      rut: '20509514-7',
      email: 'camila.reyes@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-12-29 15:08'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 149,
      name: 'Miguel Rojas',
      rut: '8202755-1',
      email: 'miguel.rojas@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-07-22 22:26'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 150,
      name: 'María González',
      rut: '16986739-9',
      email: 'maría.gonzález@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-01-06 23:28'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 151,
      name: 'María González',
      rut: '1469713-4',
      email: 'maría.gonzález@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-05-24 14:57'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 152,
      name: 'Lucía Morales',
      rut: '8292515-K',
      email: 'lucía.morales@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-11-30 08:30'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 153,
      name: 'Carlos Soto',
      rut: '6979308-5',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-05-13 17:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 154,
      name: 'Pedro Ramírez',
      rut: '7986052-1',
      email: 'pedro.ramírez@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-02-16 20:50'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 155,
      name: 'Ricardo Campos',
      rut: '6543385-6',
      email: 'ricardo.campos@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-02-03 13:54'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 156,
      name: 'Constanza Silva',
      rut: '24453484-1',
      email: 'constanza.silva@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-08-02 11:24'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 157,
      name: 'Sofía Vega',
      rut: '7469526-K',
      email: 'sofía.vega@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-01-14 04:16'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 158,
      name: 'Sofía Vega',
      rut: '16317583-2',
      email: 'sofía.vega@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-03-30 23:01'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 159,
      name: 'Daniela Pizarro',
      rut: '16021267-2',
      email: 'daniela.pizarro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-11-01 23:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 160,
      name: 'Lucía Morales',
      rut: '23809713-K',
      email: 'lucía.morales@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-03-12 01:49'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 161,
      name: 'Ignacio Herrera',
      rut: '19247468-3',
      email: 'ignacio.herrera@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-03-28 15:57'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 162,
      name: 'Francisca Fuentes',
      rut: '15838028-0',
      email: 'francisca.fuentes@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-03-16 06:40'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 163,
      name: 'Miguel Rojas',
      rut: '10773765-2',
      email: 'miguel.rojas@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-05-03 07:58'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 164,
      name: 'Cristóbal Bravo',
      rut: '13338175-3',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-12-10 14:28'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 165,
      name: 'Cristóbal Bravo',
      rut: '2106915-7',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-07-08 00:41'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 166,
      name: 'Carlos Soto',
      rut: '10571765-4',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-07-29 06:33'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 167,
      name: 'Ignacio Herrera',
      rut: '18023058-7',
      email: 'ignacio.herrera@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-02-11 19:21'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 168,
      name: 'Camila Reyes',
      rut: '8743978-K',
      email: 'camila.reyes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-09-11 02:20'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 169,
      name: 'Cristóbal Bravo',
      rut: '7837141-9',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-12-06 08:57'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 170,
      name: 'Constanza Silva',
      rut: '12121086-5',
      email: 'constanza.silva@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-01-21 21:44'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 171,
      name: 'Ignacio Herrera',
      rut: '4046303-K',
      email: 'ignacio.herrera@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-07-22 04:55'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 172,
      name: 'Ana Torres',
      rut: '24732390-4',
      email: 'ana.torres@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-12-23 10:53'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 173,
      name: 'Pedro Ramírez',
      rut: '4857650-7',
      email: 'pedro.ramírez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-03-07 02:58'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 174,
      name: 'Juan Pérez',
      rut: '7687829-7',
      email: 'juan.pérez@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-04-19 07:55'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 175,
      name: 'Francisca Fuentes',
      rut: '20389963-1',
      email: 'francisca.fuentes@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-04-20 06:13'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 176,
      name: 'Jorge Díaz',
      rut: '20389457-7',
      email: 'jorge.díaz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-11-17 02:10'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 177,
      name: 'Daniela Pizarro',
      rut: '15818848-4',
      email: 'daniela.pizarro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-08-06 18:03'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 178,
      name: 'Sofía Vega',
      rut: '12223962-0',
      email: 'sofía.vega@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-06-02 00:14'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 179,
      name: 'Carlos Soto',
      rut: '13828520-7',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-08-05 16:44'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 180,
      name: 'Cristóbal Bravo',
      rut: '21126736-6',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-09-17 12:26'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 181,
      name: 'Miguel Rojas',
      rut: '11737574-7',
      email: 'miguel.rojas@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-04-23 02:04'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 182,
      name: 'Fernanda Castro',
      rut: '1421800-8',
      email: 'fernanda.castro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-09-17 23:40'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 183,
      name: 'Jorge Díaz',
      rut: '11741086-0',
      email: 'jorge.díaz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-10-06 07:17'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 184,
      name: 'Valentina Muñoz',
      rut: '13298539-6',
      email: 'valentina.muñoz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-05-02 05:22'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 185,
      name: 'Valentina Muñoz',
      rut: '21075425-0',
      email: 'valentina.muñoz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-05-14 23:11'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 186,
      name: 'Francisca Fuentes',
      rut: '7760614-6',
      email: 'francisca.fuentes@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-04-28 21:13'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 187,
      name: 'Sofía Vega',
      rut: '5216868-3',
      email: 'sofía.vega@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-12-31 01:35'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 188,
      name: 'Carlos Soto',
      rut: '4711454-3',
      email: 'carlos.soto@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2024-04-27 14:06'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 189,
      name: 'Ignacio Herrera',
      rut: '16538045-1',
      email: 'ignacio.herrera@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-09-19 02:03'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 190,
      name: 'Daniela Pizarro',
      rut: '9710446-0',
      email: 'daniela.pizarro@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-02-17 21:42'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 191,
      name: 'Felipe López',
      rut: '21476510-K',
      email: 'felipe.lópez@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-06-17 03:02'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 192,
      name: 'Valentina Muñoz',
      rut: '1746836-7',
      email: 'valentina.muñoz@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-07-16 05:30'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 193,
      name: 'María González',
      rut: '14275856-2',
      email: 'maría.gonzález@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-11-08 13:48'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 194,
      name: 'Jorge Díaz',
      rut: '9210738-7',
      email: 'jorge.díaz@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-02-28 17:58'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 195,
      name: 'Ana Torres',
      rut: '24478492-3',
      email: 'ana.torres@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-09-22 04:43'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 196,
      name: 'Lucía Morales',
      rut: '13455836-3',
      email: 'lucía.morales@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-11-07 00:55'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 197,
      name: 'Cristóbal Bravo',
      rut: '24932393-4',
      email: 'cristóbal.bravo@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-03-06 15:25'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 198,
      name: 'Juan Pérez',
      rut: '3929521-3',
      email: 'juan.pérez@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2025-09-09 21:21'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 199,
      name: 'Daniela Pizarro',
      rut: '17948934-9',
      email: 'daniela.pizarro@example.com',
      travel_type: 'camión de carga',
      travel_date: new Date('2024-06-19 14:19'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      id: 200,
      name: 'Francisca Fuentes',
      rut: '16761162-3',
      email: 'francisca.fuentes@example.com',
      travel_type: 'vehículo particular',
      travel_date: new Date('2025-06-23 03:17'),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Persons', null, {});
  }
};
