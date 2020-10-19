import 'reflect-metadata';
import {
  createConnection,
  getConnection,
  getRepository,
  Repository,
  FindOptionsUtils,
  SelectQueryBuilder,
  EntityManager,
} from 'typeorm';
import { Timer } from './timer';
import { Address } from './entity/Address';
import { Case } from './entity/Case';
import { Check } from './entity/Check';
import { Clothing } from './entity/Clothing';
import { Dental } from './entity/Dental';
import { DentalCondition } from './entity/DentalCondition';
import { Description } from './entity/Description';
import { Desease } from './entity/Desease';
import { Document } from './entity/Document';
import { Ers } from './entity/Ers';
import { Event } from './entity/Event';
import { Feature } from './entity/Feature';
import { Fingerprint } from './entity/Fingerprint';
import { InternetResource } from './entity/InternetResource';
import { Material } from './entity/Material';
import { Phone } from './entity/Phone';
import { Photo } from './entity/Photo';
import { Preventive } from './entity/Preventive';
import { PrimaryMaterial } from './entity/PrimaryMaterial';
import { Progress } from './entity/Progress';
import { Signer } from './entity/Signer';
import { Thing } from './entity/Thing';
import { Upload } from './entity/Upload';
import { User } from './entity/User';
import { Wanted } from './entity/Wanted';
import { resolve } from 'path';

/*
(SelectQueryBuilder.prototype as any).loadAllRelationInclude = function () {
  console.log('loadAllRelationInclude-----------');
  console.log(this);
  return this;
};

const applyOptionsToQueryBuilder = FindOptionsUtils.applyOptionsToQueryBuilder.bind(
  FindOptionsUtils,
);
FindOptionsUtils.applyOptionsToQueryBuilder = function (qb, options: any) {
  if (options.include === 'all') {
    (qb as any).loadAllRelationInclude();
  }

  return applyOptionsToQueryBuilder(qb, options);
};
*/

const EntityManagerPrototypeFind = EntityManager.prototype.find;

EntityManager.prototype.find = async function (
  entityClass,
  optionsOrConditions,
) {
  if (optionsOrConditions.include && optionsOrConditions.include === 'all') {
    console.log('include all');
  }
  const ret = await EntityManagerPrototypeFind.call(
    this,
    entityClass,
    optionsOrConditions,
  );
  console.log(ret);
  return ret;
};

(async () => {
  const connection = await createConnection();

  try {
    console.log(
      '\n\n############################################## Query the DB',
    );

    const ersRepository = getRepository(Ers);

    const query = ersRepository
      .createQueryBuilder('Ers')
      // .leftJoinAndSelect('Ers.User', 'Ers_User')
      .leftJoinAndSelect('Ers.Materials', 'Ers_Materials')
      .leftJoinAndSelect('Ers_Materials.Uploads', 'Ers_Materials_Uploads')
      .leftJoinAndSelect(
        'Ers_Materials.PrimaryMaterials',
        'Ers_Materials_PrimaryMaterials',
      )
      .leftJoinAndSelect('Ers_Materials.Signers', 'Ers_Materials_Signers')
      .leftJoinAndSelect('Ers.Descriptions', 'Ers_Descriptions')
      .leftJoinAndSelect('Ers.Features', 'Ers_Features')
      .leftJoinAndSelect('Ers.Phones', 'Ers_Phones')
      .leftJoinAndSelect('Ers.Photos', 'Ers_Photos')
      .leftJoinAndSelect('Ers.Things', 'Ers_Things')
      .leftJoinAndSelect('Ers_Things.Uploads', 'Ers_Things_Uploads')
      .leftJoinAndSelect('Ers_Phones.Uploads', 'Ers_Phones_Uploads')
      .leftJoinAndSelect('Ers_Photos.Uploads', 'Ers_Photos_Uploads')
      .leftJoinAndSelect('Ers_Features.Uploads', 'Ers_Features_Uploads')
      // .select([
      //   'Ers.id',
      //   'Ers_User.id',
      //   'Ers_Materials.id',
      //   'Ers_Materials_Uploads.id',
      //   'Ers_Materials_PrimaryMaterials.id',
      //   'Ers_Materials_Signers.id',
      //   'Ers_Descriptions.id',
      //   'Ers_Features.id',
      //   'Ers_Phones.id',
      //   'Ers_Photos.id',
      //   'Ers_Things.id',
      //   'Ers_Things_Uploads.id',
      //   'Ers_Photos_Uploads.id',
      //   'Ers_Features.id',
      // ]);
      .where('Ers.id = 105');

    // console.log('query: ', query.getSql());

    //for (let nTest = 0; nTest < 5; nTest++) {
    // console.log(`\n>>>>>>>> Test n.${nTest}`);
    // const t0 = new Timer('Raw query');
    // const raw = await connection.query(query.getSql());
    // console.log(raw);
    // t0.stop();
    // console.log('N. of rows returned: ', raw.length);
    const t1 = new Timer('Query with hydration');
    const res = await (ersRepository.find as any)({
      where: { id: '105' },
      include: 'all',
    });
    console.log('N. of Entities returned: ', res.length);
    // console.log(res);
    t1.stop();
    //}
  } catch (e) {
    console.error('Exception: ', e);
  }
  await connection.close();
  console.log('DONE!');
})();
