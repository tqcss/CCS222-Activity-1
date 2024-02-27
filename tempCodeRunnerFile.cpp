#include <iostream>
// Bresenham's Algorithm

class Raster {
private:
    char *content;
    int sizeX;
    int sizeY;

public:
    Raster(const int x, const int y) {
        sizeX = x;
        sizeY = y;
        this->content = new char[y][x];
    }
};

int main() {
    Raster raster(10, 10);
    std::cout << "End Program";
}