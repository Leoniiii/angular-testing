import { COURSES } from './../../../../server/db-data';
import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('Courses Service', () => {

    let coursesService: CoursesService;
    let httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CoursesService]
        });
        httpTestingController = TestBed.inject(HttpTestingController)
        coursesService = TestBed.inject(CoursesService)
    });

    it('Should retreive all courses', () => {
        coursesService.findAllCourses().subscribe(courses => {
            expect(courses).toBeTruthy('Not returned courses');
            expect(courses.length).toBe(12, 'Incorrect length number');
            const course = courses.find(course => course.id === 12);
            expect(course.titles.description).toBe("Angular Testing Course")
        })
        const req = httpTestingController.expectOne('/api/courses');
        expect(req.request.method).toEqual('GET');
        req.flush({ payload: Object.values(COURSES) })
    })
})