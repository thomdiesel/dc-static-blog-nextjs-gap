/* eslint-env jest */
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BlogList from './blog-list';
import { MediaType } from '../../common/interfaces/media.interface';
import BlogCard from '../blog-card/blog-card';
jest.mock('../blog-card/blog-card', () => () => <div className="blog-card-mock" />);

describe('BlogList', () => {
  let blogPostFixture;

  beforeEach(() => {
    blogPostFixture = {
      title: 'blog-post-test',
      date: '2019-08-13',
      description: 'blog-post-description',
      authors: [],
      image: {
        image: {
          id: 'image-id',
          name: 'image-name',
          endpoint: 'image-endpoint',
          defaultHost: 'image-default-host',
          mediaType: MediaType.IMAGE
        },
        altText: ''
      },
      urlSlug: 'url-slug',
      tags: ['test-tag'],
      readTime: 15,
      content: []
    };
  });

  test('renders blog list with a single blog', async () => {
    const props = {
      blogPosts: [blogPostFixture]
    };
    const component = await renderer.create(<BlogList {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('renders blog list with ten blog posts', async () => {
    const props = {
      blogPosts: Array(10).fill(blogPostFixture)
    };

    const wrapper = shallow(<BlogList {...props} />);
    expect(wrapper.find(BlogCard).length).toEqual(10);
  });
});
