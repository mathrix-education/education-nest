import {Factory, times} from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';
import countriesJson from '../raws/countries.json';
import disciplinesJson from '../raws/disciplines.json';
import gradesJson from '../raws/grades.json';
import {Country} from '../../modules/content/models/country';
import {Discipline} from '../../modules/content/models/discipline';
import {Grade} from '../../modules/content/models/grade';
import {Activity} from '../../modules/content/models/activity';
import {Notion} from '../../modules/content/models/notion';
import {User} from '../../modules/users/models/user';
import {Chapter} from '../../modules/content/models/chapter';
import {Module} from '../../modules/content/models/module';
import {Category} from '../../modules/blog/models/category';
import {Post} from '../../modules/blog/models/post';
import {Report} from '../../modules/interactions/models/report';
import {Comment} from '../../modules/interactions/models/comment';
import {Vote} from "../../modules/interactions/models/vote";
import {Product} from "../../modules/trainings/models/product";

class DatabaseSeeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const em = connection.createEntityManager();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Country)
      .values(countriesJson)
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Discipline)
      .values(disciplinesJson)
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Grade)
      .values(gradesJson)
      .execute();

    await times(30, async () => {
      const chapter = await factory(Chapter)().make();
      const discipline = await connection
        .createQueryBuilder()
        .select()
        .from(Discipline, 'disciplines')
        .getOne();
      const grade = await connection
        .createQueryBuilder()
        .select()
        .from(Grade, 'grades')
        .getOne();
      chapter.discipline = discipline;
      discipline.chapters.push(chapter);
      chapter.grade = grade;
      grade.chapters.push(chapter);
      await em.save(chapter);
      await em.save(discipline);
      await em.save(grade);
    });

    await times(90, async () => {
      const notion = await factory(Notion)().make();
      const chapter = await connection
        .createQueryBuilder()
        .select()
        .from(Chapter, 'chapters')
        .getOne();
      notion.chapter = chapter;
      chapter.notions.push(notion);
    });

    await times(200, async () => {
      const activity = await factory(Activity)().make();
      const notion: Notion = await connection
        .createQueryBuilder()
        .select()
        .from(Notion, 'notions')
        .getOne();
      activity.notion = notion;
      notion.activities.push(activity);
      await em.save(activity);
      await em.save(notion);
    });

    await times(250, async () => {
      const module = await factory(Module)().make();
      const activity = await connection
        .createQueryBuilder()
        .select()
        .from(Activity, 'activities')
        .getOne();
      module.activity = activity;
      activity.modules.push(module);
    });

    await times(100, async () => {
      const user = await factory(User)().make();
      const grade: Grade = await connection
        .createQueryBuilder()
        .select()
        .from(Grade, 'grades')
        .getOne();
      user.grade = grade;
      grade.users.push(user);
      await em.save(user);
      await em.save(grade);
    });
    await connection.createQueryBuilder()
      .update(User)
      .set({email: 'admin@mathrix.fr', scopes: ['*']})
      .where('id = :id', { id: 1 })
      .execute();

    await factory(Category)().seedMany(10);

    await times(20, async () => {
      const post = await factory(Post)().make();
      const category = await connection
        .createQueryBuilder()
        .select()
        .from(Category, 'categories')
        .getOne();
      const module = await connection
        .createQueryBuilder()
        .select()
        .from(Module, 'modules')
        .getOne();
      const user = await connection
        .createQueryBuilder()
        .select()
        .from(User, 'users')
        .getOne();
      post.category = category;
      category.posts.push(post);
      post.module = module;
      module.posts.push(post);
      post.user = user;
      user.posts.push(post);
      await em.save(post);
      await em.save(category);
      await em.save(module);
      await em.save(user);
    });

    await times(200, async () => {
      const comment = await factory(Comment)().make();
      const module = await connection
        .createQueryBuilder()
        .select()
        .from(Module, 'modules')
        .getOne();
      const user = await connection
        .createQueryBuilder()
        .select()
        .from(User, 'users')
        .getOne();
      comment.parent = null;
      comment.module = module;
      module.comments.push(comment);
      comment.user = user;
      user.comments.push(comment);
      await em.save(comment);
      await em.save(module);
      await em.save(user);
    });

    await times(500, async () => {
      const child = await factory(Comment)().make();
      const parent = await connection
        .createQueryBuilder()
        .select()
        .from(Comment, 'comments')
        .where('parent_id = null')
        .getOne();
      child.parent = parent;
      child.module = parent.module;
      parent.children.push(child);
      parent.module.comments.push(child);
      await em.save(child);
      await em.save(parent);
      await em.save(parent.module);
    });

    await times(100, async () => {
      const vote = await factory (Vote)().make();
      do {
        var comment = await connection
          .createQueryBuilder()
          .select()
          .from(Comment, 'comments')
          .getOne();
        var user = await connection
          .createQueryBuilder()
          .select()
          .from(User, 'users')
          .getOne();
      } while (
        await connection
          .createQueryBuilder()
          .select()
          .from(Vote, 'votes')
          .where({user_id: user.id, comment_id: comment.id})
          .getCount() !== 0
        );
      vote.user = user;
      user.votes.push(vote);
      vote.comment = comment;
      comment.votes.push(vote);
      await em.save(vote);
      await em.save(comment);
      await em.save(user);
    });

    await times(350, async () => {
      const product = await factory(Product)().make();
      if (product.id <= 50) {
        product.type = 'training';
        product.price = faker.rand
      }
    });

    await times(50, async () => {
      const report = await factory(Report)().make();
      const module = await connection
        .createQueryBuilder()
        .select()
        .from(Module, 'modules')
        .getOne();
      report.module = module;
      module.reports.push(report);
      await em.save(report);
      await em.save(module);
    });

  }
}
